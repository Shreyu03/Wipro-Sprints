// ts code
class HelloWorld {
    
    //A variable of type HTMLElement
    element: HTMLElement;

    //A Consctructor that accepts an element
    constructor (e: HTMLElement) { 
        this.element = e;
    }
 
    sayHello(message: string) {
        this.element.innerHTML = message;
    }

}

window.onload = () => {
  // heading1
  var e = document.getElementById('headPara');
    //Initiate HelloWorld Class
    var hello = new HelloWorld(e);
    hello.sayHello("Onboarding of Customers of North Wind Platform");

    // heading2
    var e = document.getElementById('h1'); 
    var hello = new HelloWorld(e);
    hello.sayHello("Zoarere");

    // heading3
    var e = document.getElementById('h2'); 
    var hello = new HelloWorld(e);
    hello.sayHello("Telepark");

        // heading3
    var e = document.getElementById('h3'); 
    var hello = new HelloWorld(e);
    hello.sayHello("Talkola");
    
    //heading 4 
    var e = document.getElementById('h4'); 
    var hello = new HelloWorld(e);
    hello.sayHello("Buzzworks");

    //heading 5 
    var e = document.getElementById('h5'); 
    var hello = new HelloWorld(e);
    hello.sayHello("Omatom");
};