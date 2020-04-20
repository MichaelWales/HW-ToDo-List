import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      items: [
        {name: 'Dust Everything', isComplete: false},
        {name: 'Learn Robotics', isComplete: true},
        {name: 'Make Dusting Robot', isComplete: false},
        {name: 'Profit', isComplete: false}
      ],
      newItem: ""
    },
    methods: {
      saveNewItem: function() {
        const itemToAdd = {
          name: this.newItem,
          isComplete: false
        }
        this.items.push(itemToAdd);
        this.newItem = "";
      },
      completeItem: function(index) {
        this.items[index].isComplete = true;
      }
    }
  });
});
