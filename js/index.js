var quots = [
    {
      quote: "You miss 100% of the shots you don't take.",
      author: "--Wayne Gretzy",
    },
  
    {
      quote: "So many books, so little time.",
      author: "― Frank Zappa ",
    },
  
    {
      quote:
        "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”    ",
      author: "― Albert Einstein    ",
    },
  
    {
      quote:
        "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”    ",
      author: "― Dr. Seuss    ",
    },
  
    {
      quote: "“You only live once, but if you do it right, once is enough.    ",
      author: "― Mae West    ",
    },
    {
      quote: "“Be the change that you wish to see in the world.”    ",
      author: "― Mahatma Gandhi    ",
    },
  ];
  
  function generateQuote(){
      var random = Math.trunc(Math.random()  * quots.length) ;
     for(var i =0 ;i < quots.length ; i++){
      document.getElementById("quote").innerHTML = quots[random].quote;
      document.getElementById("author").innerHTML = quots[random].author;
      
     };
    
  }
