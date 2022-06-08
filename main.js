const Canva=document.getElementById("Canva");
Canva.width=200;


const ctx = Canva.getContext("2d");

const road=new Road(Canva.width/2,Canva.width*0.9);
const car=new Car(road.getLaneCenter(1),100,30,50, "AI");
const traffic = [
    new Car(road.getLaneCenter(1), -100, 30, 50, "IMITATION", 1.5)
];

animate();

function animate(){
    for(let i = 0; i<traffic.length; i++){
        traffic[i].update(road.borders, []);
    }
    car.update(road.borders, traffic);

    Canva.height=window.innerHeight;


    ctx.save();
    ctx.translate(0,-car.y+Canva.height*0.7);

    road.draw(ctx);
    for(let i = 0; i<traffic.length; i++){
        traffic[i].draw(ctx);
    }
    car.draw(ctx);

    ctx.restore();
    requestAnimationFrame(animate);
}