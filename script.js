//your code here!
const list = document.getElementById('infi-list');
let itemCount = 0;

function addItems(n) {
  for (let i = 0; i < n; i++) {
    itemCount++;
    const li = document.createElement('li');
    li.textContent = `Item ${itemCount}`;
    list.appendChild(li);
  }
}

addItems(10);

list.addEventListener('scroll', () => {
	if (list.scrollTop + list.clientHeight >= list.scrollHeight - 1) {
	    addItems(2);
	}
})