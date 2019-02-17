// JS goes here

//drop menu
const burger = document.querySelector('.enter');
const menu = document.querySelector('.drop');
const header = document.querySelector('h1');

burger.addEventListener('click', ()=>{
  drop.style.display="block";
  burger.style.opacity = "0";
  header.style.opacity = "0";
})

const expic = document.querySelector('.exit');
const drop = document.querySelector('.drop');
expic.addEventListener('click', () =>{
 drop.style.display = "none";
 burger.style.opacity = "1";
 header.style.opacity = "1";
});

//tabs code

// const classNameTabs = document.getElementsByClassName('link')

class TabLink {
  constructor (tab) {
    // setting up a reference to our DOM node
    this.tab = tab;
    // set up a reference to our custom data attribute
    this.tabData = this.tab.dataset.tab;
    console.log(this.tabData);
    // sets up a reference to our matching tab-content's element using the data attribute
    this.tabContent = document.querySelector(`.card[data-tab="${this.tabData}"]`);
    console.log(this.tabContent);
    // creates a new version of Content as tabContent
    this.tabContent = new TabContent(this.tabContent);
    console.log(this.tabContent);
    // added a click event listener to our tab. That calls the method tabClick
    this.tab.addEventListener('click', this.tabClick.bind(this))
  }
  
  // method
  tabClick() {
    // Using tabContent's toggleContent method we can toggle the classlist
    this.tabContent.toggleContent();
    document.querySelectorAll('.tab').forEach(button=>{
      button.classList.remove('active');
    })
    this.tab.classList.toggle('active');
  }
}

class TabContent {
  constructor (content) {
    this.content = content
  }
  // this method is what toggles the classlist
  toggleContent () {
    document.querySelectorAll('.card').forEach(content => {
     content.classList.remove('on')
    })
    this.content.classList.toggle('on')
  }
}

const tabs = document.querySelectorAll('.tab').forEach(tab => new TabLink(tab));
