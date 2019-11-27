
$("#ch3form").submit(function(){
    var fruitcheck = false;
    var fruit = $('input[name="fruit"]');
    console.log(fruit);

    var standingcheck = false;
    var standing = $('input[name="standing"]');

    fruit.each(function() {
      if(this.checked) {
        console.log("A fruit was selected.");
        fruitcheck= true;

      }
    });

    standing.each(function() {
      if(this.checked) {
        console.log("A standing class was selected.")
        standingcheck = true;
      }
    });

    if (fruitcheck && standingcheck)
      return true;
    else {
      if (!fruitcheck && !standingcheck) {
        alert("You must pick a fruit and class standing!")
      }
      else if (!standingcheck) {
        alert("You must pick a standing class to continue!")
      }
      else {
        alert("You must pick a fruit to continue!")
      }
      return false;
    }
});
