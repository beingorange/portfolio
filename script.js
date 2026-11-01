var A={help:"Commands: about, skills, status, contact, clear",
about:"Self-taught web developer in Chattogram, learning in public.",
skills:"Solid: HTML, CSS, JavaScript, Git. Learning: React, TypeScript, Node.js.",
status:"Open to internships, junior roles and small freelance projects.",
contact:"Email: wczaraw@gmail.com"};
var out=document.getElementById('out'),ti=document.getElementById('ti');
function run(c){c=c.trim().toLowerCase();if(!c)return;
if(c==='clear'){out.textContent='';return}
out.textContent+='\n$ '+c+'\n'+(A[c]||'Command not found: '+c+'. Type “help”.');out.scrollTop=out.scrollHeight}
document.getElementById('tf').addEventListener('submit',function(e){e.preventDefault();run(ti.value);ti.value=''});
document.querySelectorAll('.hints button').forEach(function(b){b.addEventListener('click',function(){run(b.textContent)})});
document.getElementById('cf').addEventListener('submit',function(e){e.preventDefault();
var n=document.getElementById('n').value,em=document.getElementById('e').value,m=document.getElementById('m').value;
location.href='mailto:wczaraw@gmail.com?subject='+encodeURIComponent('Portfolio message from '+n)+'&body='+encodeURIComponent(m+'\n\nReply to: '+em)});
document.getElementById('theme').addEventListener('click',function(){var r=document.documentElement,
d=r.dataset.theme?r.dataset.theme==='dark':!matchMedia('(prefers-color-scheme: light)').matches;r.dataset.theme=d?'light':'dark'});
(function(){
var links=[].slice.call(document.querySelectorAll('.nav ul a'));
var ok=!matchMedia('(prefers-reduced-motion: reduce)').matches;
var bar=document.createElement('div');bar.className='bar';
function onS(){var h=document.documentElement.scrollHeight-innerHeight;bar.style.transform='scaleX('+(h>0?scrollY/h:0)+')';
var cur='#home';links.forEach(function(l){var s=document.querySelector(l.getAttribute('href'));if(s&&s.getBoundingClientRect().top<innerHeight*.4)cur=l.getAttribute('href')});
links.forEach(function(l){l.classList.toggle('act',l.getAttribute('href')===cur)})}
addEventListener('scroll',onS,{passive:true});onS();
if(!ok)return;
document.body.appendChild(bar);
var h1=document.querySelector('h1'),n=0;
(function sp(node){[].slice.call(node.childNodes).forEach(function(c){
if(c.nodeType===3){var f=document.createDocumentFragment();c.textContent.split(/(\s+)/).forEach(function(p){if(!p)return;if(/^\s+$/.test(p)){f.appendChild(document.createTextNode(' '))}else{var e=document.createElement('em');e.className='w';e.style.setProperty('--i',n++);e.textContent=p;f.appendChild(e)}});c.replaceWith(f)}
else if(c.nodeType===1)sp(c)})})(h1);
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('section h2,.sub,.card,.proj,.tl,.tags,.term,.hints,.pillars,#cf,.hero .lead,.hero .row,.status').forEach(function(el){
var i=[].indexOf.call(el.parentNode.children,el);el.style.setProperty('--d',Math.min(i,5)*.1+'s');el.classList.add('rv');io.observe(el)});
document.querySelectorAll('.tags span').forEach(function(s,i){s.style.setProperty('--k',i)});
var g=document.createElement('div');g.className='glow';document.body.appendChild(g);
addEventListener('mousemove',function(e){g.style.setProperty('--x',e.clientX+'px');g.style.setProperty('--y',e.clientY+'px')});
var c=document.querySelector('.card-id');
c.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform='perspective(800px) rotateY('+x*14+'deg) rotateX('+-y*14+'deg)'});
c.addEventListener('mouseleave',function(){c.style.transform=''});
var tio=new IntersectionObserver(function(es){if(es[0].isIntersecting){tio.disconnect();var t='help',i=0;(function k(){if(i<=t.length){ti.value=t.slice(0,i++);setTimeout(k,140)}else setTimeout(function(){run(t);ti.value=''},350)})()}},{threshold:.6});
tio.observe(document.querySelector('.term'));
})();
