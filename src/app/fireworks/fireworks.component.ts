import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fireworks',
  templateUrl: './fireworks.component.html',
  styleUrls: ['./fireworks.component.css'],
  standalone: false
})
export class FireworksComponent implements OnInit {
  @ViewChild('fireworksCanvas', { static: true }) canvasRef!: ElementRef;
  private ctx: CanvasRenderingContext2D | null = null;
  private particles: any[] = [];

  ngOnInit(): void {
    this.initializeCanvas();
    this.animate();

    // Add event listener to manually handle mouse interaction
    this.canvasRef.nativeElement.addEventListener('mousemove', (event: MouseEvent) => {
      this.createFirework(event); // Trigger fireworks on mouse move
    });
  }

  private initializeCanvas(): void {
    const canvas: HTMLCanvasElement = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d');
    if (this.ctx === null) {
      throw new Error('Could not get canvas 2d context');
    }
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

     // Set the default background to black
     this.ctx.fillStyle = 'black';  // Set fill style to black
     this.ctx.fillRect(0, 0, canvas.width, canvas.height);  
  }

  private randomColor(): string {
    const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#8a2be2', '#ff1493'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  private createFirework(event: MouseEvent): void {
    const particlesCount = 100;
    for (let i = 0; i < particlesCount; i++) {
      this.particles.push(new Particle(event.clientX, event.clientY, this.ctx!, this.randomColor()));
    }
  }

  private animate(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx?.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].update();
      this.particles[i].draw();
      if (this.particles[i].life <= 0) {
        this.particles.splice(i, 1);
        i--;
      }
    }

    requestAnimationFrame(this.animate.bind(this));
  }
}

// Firework Particle class
class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  life: number;
  private ctx: CanvasRenderingContext2D;

  constructor(x: number, y: number, ctx: CanvasRenderingContext2D, color: string) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 3 + 1;
    this.speedX = (Math.random() - 0.5) * 10;
    this.speedY = (Math.random() - 0.5) * 10;
    this.color = color;
    this.life = 100;
    this.ctx = ctx;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.life -= 2;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.globalAlpha = this.life / 100;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.fill();
  }
}
