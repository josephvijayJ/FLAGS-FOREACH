// var header = document.querySelector('#main-header');
// header.style.border = '5px solid red';
// var input = document.querySelector('input');
// input.value = 'Items to be Added';
// var submit = document.querySelector('input[type="submit"]');
// submit.style.background = 'coral';
// // var class1 =  document.getElementsByClassName('list-group');
// // class1[0].style.color = 'pink';
// // var items = document.querySelector('.list-group-item:nth-child(2)');
// // items.style.color = 'red';
// // var items = document.querySelectorAll('.title');
// // console.log((items[1].style.color = 'green'));

// var even = document.querySelectorAll('li:nth-child(even)');
// even.forEach((item) => {
//   console.log(item);
//   item.style.background = 'red';
// });

var form = document.getElementById('addform');
var items = document.getElementById('items');
var filter = document.getElementById('filter');

//Form Submit Event

form.addEventListener('submit', addItem);
items.addEventListener('click', removeitem);
filter.addEventListener('keyup', filteritem);

//Add Item

function addItem(e) {
  e.preventDefault();
  //get Input Value
  var newItem = document.getElementById('item').value;

  //create new li element

  var li = document.createElement('li');
  //create class name
  li.className = 'list-group-item';

  //   items.innerHTML = `<li class = "list-group-item">${newItem}<li>`;
  //   li.innerHTML = `${newItem}`;
  li.appendChild(document.createTextNode(newItem));
  //   console.log(li);

  //CREATE Delete Button
  var delete1 = document.createElement('button');
  delete1.className = 'btn  btn-danger btn-sm float-right delete';
  //Append TexT Node
  delete1.appendChild(document.createTextNode('x'));
  //   Append button to li
  li.appendChild(delete1);
  //Append Li to thr list
  items.appendChild(li);

  //   console.log(items);
}
function removeitem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you want to delete')) {
      var li = e.target.parentElement;
      items.removeChild(li);
    }
  }
}
function filteritem(e) {
  // convert to lowercase
  var text = e.target.value.toLowerCase();
  //item list contains the various li elements
  var itemlist = items.getElementsByTagName('li');
  //   console.log(itemlist);
  Array.from(itemlist).forEach((item) => {
    var Itemname = item.firstChild.textContent; //li =>firstchild text

    //item.index0f(item)
    if (Itemname.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
