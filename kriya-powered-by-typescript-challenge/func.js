// encapsulation in js and ts
class model
{
  constructor()
  {
    var heading;
  }
  // fetching the headings of the blocks
      getName()
      {
        return this.heading;
      }
    transform(heading)
    {
      this.heading=heading;
    } 
  }
// calling the model class on page load  and rendering the changes 
  window.onload = function(){
    var obj=new model();
    obj.transform("Onboarding of Customers of North Wind Platform");
    // const header = '';
    document.getElementById("headPara").innerHTML =  obj.getName();
    obj.transform("Zoarere");
    document.getElementById("h1").innerHTML =  obj.getName();
    obj.transform("Telepark"); 
    document.getElementById("h2").innerHTML =  obj.getName();
    obj.transform("Talkola"); 
    document.getElementById("h3").innerHTML =  obj.getName();
    obj.transform("Buzzworks"); 
    document.getElementById("h4").innerHTML =  obj.getName();
    obj.transform("Omatom"); 
    document.getElementById("h5").innerHTML =  obj.getName();
    // now setting and fetching the card contents using ClassName]
    // obj.transform("sdadsssssss");
    // document.getElementById("card2").innerHTML = obj.getName();
    }