// script.js
function restart(el,anim){el.style.animation='none';void el.offsetWidth;el.style.animation=anim;}
function bloom(){
document.querySelectorAll('.anim-stem').forEach((s,i)=>{s.style.strokeDashoffset=520;restart(s,`draw 1.6s ${0.05*i}s forwards ease`)});
document.querySelectorAll('.anim-leaf').forEach((l,i)=>{l.style.opacity=0;restart(l,`popLeaf .6s ${0.3+i*0.06}s forwards ease-out`)});
document.querySelectorAll('.anim-petal').forEach((p,i)=>{p.style.opacity=0;restart(p,`bloomUp .9s ${0.45+i*0.15}s forwards cubic-bezier(.2,.8,.2,1.2)`)});
}
function spawnHearts(count=28){
const layer=document.getElementById('hearts-layer');
const emojis=['❤️','💖','💕','💗','💘'];
for(let i=0;i<count;i++){
const el=document.createElement('div');
el.className='heart';
el.textContent=emojis[Math.floor(Math.random()*emojis.length)];
const startX=(Math.random()*140-70);
const startY=220+Math.random()*20;
const drift=(Math.random()*160-80)+'px';
const scale=(0.7+Math.random()*0.9).toFixed(2);
const delay=(Math.random()*0.6).toFixed(2);
const dur=(2.4+Math.random()*1.6).toFixed(2);
el.style.left='50%'; el.style.bottom='0';
el.style.setProperty('--x',startX+'px');
el.style.setProperty('--y',startY+'px');
el.style.setProperty('--drift',drift);
el.style.setProperty('--s',scale);
el.style.animation=`floatUp ${dur}s ${delay}s forwards ease-out`;
layer.appendChild(el);
setTimeout(()=>el.remove(),(parseFloat(dur)+parseFloat(delay))*1000+150);
}
}
function bloomWithHearts(){bloom();spawnHearts(28)}
document.getElementById('replay').addEventListener('click',bloomWithHearts);
// start once
bloomWithHearts();
