//if I check a box/dare it will:
    var dares = {
      kind: [
      "Give someone a hug",
      "Make someone a card",
      "Volunteer at a foodbank"
      ],
      thrill:[
      "Go on a rollercoaster",
      "Got to a haunted house",
      "Go Go-Karting",
      ],
      change:[
      "Pick up 5 pieces of trash",
      "Post something inspirational on social media",
      "Write a letter to Congressmen" 
      ],
      fun:[
      "Play Bean Boozled",
      "Learn how to say hello in 5 different languages",
      "Go to a cat cafe"
      ]
    }
    
   
    
    var points = localStorage.getItem("points");

    localStorage.setItem("points",points);
    $("#ptBox").text("Points: " + points);
    $(document).ready(function(){
      $(':checkbox').change(function completeDare(event){
    //debugger;
      //-congratulate
    // Store
    var points = localStorage.getItem("points");
        var newpoints = parseInt(points) + 1
    localStorage.setItem("points",newpoints);
        $("#ptBox").text("Points: " + newpoints);
        
    alert("Yay! You finished a dare!");    
    //This hides the checkbox and dare
     $(event.target).parent().hide();
    //This finds the type of attribute which corresponds to the dares' array type
    var types = $(event.target).parent().parent().parent().attr("id");
    //This randomly chooses a dare
    var random = Math.floor(Math.random() * dares[types].length);
    //This finds the place you want to append to, and appends a random dare with the same type to the place you want.
    var newCheckbox =  $('<input type="checkbox">').change(completeDare);
    var itemList = $('<li></li>').append(newCheckbox).append(dares[types][random]);
    $(event.target).parent().parent().append(itemList)
    
          //-I will get points
    

    
});


    //if I level up it will:
  //change level to 2
//-I will get 3 more check boxes

  
});