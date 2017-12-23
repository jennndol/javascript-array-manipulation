'use strict'

var contacts = [{ Id: 1, name: 'Andi', gender: 'male', group_ids: [1,2,3] },{ Id: 2, name: 'Budi', gender: 'male', group_ids: [1,2] },{ Id: 3, name: 'Cindy', gender: 'male', group_ids: [1] },{ Id: 4, name: 'David', gender: 'male', group_ids: [1,2] },{ Id: 5, name: 'Emily', gender: 'male', group_ids: [1,2,3] }];
var groups = [{ id: 1, name: 'Teman SMP' }, { id: 2, name: 'Teman SMA' }, { id: 3, name: 'Teman Kuliah' }];

function showContactByGroup(group_name) {
  let result = [];
  let index = groups.findIndex(function(item, i){
    return item.name === group_name;
  });
  let group_id = groups[index].id;
  contacts.map(function (item, idx) {
    if (item.group_ids.indexOf(group_id)!=-1) {
      result.push(item.name);
    }
  });
  return result;
}

// DRIVER CODE
console.log(showContactByGroup('Teman Kuliah'));
console.log(showContactByGroup('Teman SMA'));
console.log(showContactByGroup('Teman SMP'));

module.exports = showContactByGroup;
