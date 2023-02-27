





function IsEmpty() {
    var a = document.forms["form"]["fillname"].value;
    var b = document.forms["form"]["emailName"].value;
    console.log(b);
    console.log(a);
    if (a == "" || a == null || b == "" || b == null) {
      var button = document.getElementById("mybtn")
      console.log(button)
      var bb = button.style.marginLeft = "100px"
      console.log(bb);
      return false;
    }
    else if(a!= null && b!=null){
      var button = document.getElementById("mybtn")
      console.log(button)
      var bb = button.style.marginLeft = "0px";
      bb = button.style.marginRight = "100px"
      console.log(bb);
      return false;
    }
    else{
        return;
    }
}
