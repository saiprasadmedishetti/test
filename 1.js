const items=[{'id':1, 'type': 'external'}, {'id':2}, {'id':3, type: 'internal'}];

const filteredItem=items.filter(item=>item.type=="external");

console.log(filteredItem);
