var app = angular.module("myMod",[]);

app.controller("sixYearController", function($scope){
  $scope.wordArray = ["Play-doh", "Barbie", "Hot Wheels", "Checkers","PlayStation"];
  $scope.addStyle = [{color: "red"}, {color:"orange"},{color:"yellow"}, {color:"green"},{color:"blue"}];
  $scope.phrase = ["At school", "The zoo", "Dog Park", "At Chuck-E-Cheese"]
  $scope.moreWords= ["No", "Please", "Yes", "Booger", "Games","Crayon"];
  $scope.randomArray=[];


  $scope.buttonOne = function(){
    var randomWord = $scope.wordArray[Math.floor(Math.random() * $scope.wordArray.length)];
    var randomStyle = $scope.addStyle[Math.floor(Math.random() * $scope.addStyle.length)];
    $scope.randomArray.push({
      name:randomWord,
      style:randomStyle
  
    });
    // $scope.addStyle.push({
    //   name:style
    // });
  }

  $scope.buttonTwo = function(){
    var randomWord = $scope.phrase[Math.floor(Math.random() * $scope.phrase.length)];
    $scope.randomArray.push({
      name:randomWord

    });
  }

  $scope.buttonThree = function(){
    var randomWord =$scope.moreWords[Math.floor(Math.random()* $scope.moreWords.length)];
    $scope.randomArray.push({
      name:randomWord

    });
  }

  $scope.buttonFour = function(){
    var randomWord = $scope.phrase[Math.floor(Math.random() * $scope.phrase.length)];
    var randomStyle = $scope.addStyle[Math.floor(Math.random() * $scope.addStyle.length)];
    $scope.randomArray.push({
      name:randomWord,
      style:randomStyle
    });
  }
});
