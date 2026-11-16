(function(){
var links=[].slice.call(document.querySelectorAll('nav a:not(.logo)'));
var secs=links.map(function(a){return document.querySelector(a.getAttribute('href'))});
function mark(){var y=window.scrollY+window.innerHeight*.3,cur=-1;secs.forEach(function(s,i){if(s.offsetTop<=y)cur=i});links.forEach(function(a,i){a.classList.toggle('on',i===cur)})}
window.addEventListener('scroll',mark,{passive:true});mark();
var box=document.getElementById('box'),big=box.querySelector('img');
document.addEventListener('click',function(e){var t=e.target;if(t.closest('.shot')&&t.tagName==='IMG'){big.src=t.src;big.alt=t.alt;box.showModal()}else if(t===box||t===big){box.close()}});
})();
