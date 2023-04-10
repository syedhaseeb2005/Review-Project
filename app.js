var playername = document.querySelector('.playername')
var playerprof = document.querySelector('.profession')
var aboutplayer = document.querySelector('.para')
var personimg = document.querySelector('.person-img')


var previousbtn = document.querySelector('.prev-btn')
var nextbtn = document.querySelector('.next-btn')
var surprise = document.querySelector('.random-btn')

let personinfo = [
    {
        name: 'Sarfaraz Ahmed',
        profession: 'Former Captain of Pakistan Cricket Team',
        img: './download.jpg',
        para: 'Since then, Sarfraz has been a man for all formats, steady with the gloves, aggressive with the bat and street-smart as a captain across formats. At 30, with the Champions Trophy tucked under his arm, he became arguably Pakistans most respected cricketer since Misbah-ul-Haq and Younis Khan. It would remain that way till October 2019, when a sustained loss of personal form saw him'
    },
    {
        name: 'Babar Azam',
        profession: 'Captain of Pakistan Cricket Team',
        img: './image.jpg',
        para:'Babar Azam was born on 15 October 1994 into a Punjabi Muslim family. He was born in the Walled City and recalls the memories of "playing cricket and roaming around like a free bird in those streets." His older cousins Kamran and Umar Akmal were the reason he was attracted to cricket, and their stories inspired him to take up cricket as his profession. He had been a ball boy at Gaddafi Stadium[11] before joining a cricket academy.'
    },
    {
        name: "Imad Wasim",
        profession: 'Best All-rounder of Pakistan cricket team',
        img: './imad.jpg',
        para: 'He made his Twenty20 International debut for Pakistan against Zimbabwe in Lahore on 24 May 2015.[11] He made his One Day International debut for Pakistan against Sri Lanka on 19 July 2015.[12] He was selected in the Pakistan squad for the 2016 ICC World Twenty20. Later in 2016, he became the 1st Pakistani spinner to take a 5-fer in T20Is as he recorded figures of 5/14 against the Windies.'

    },
    {
        name: 'Mohammad Amir',
        profession: 'Best bowler of Pakistan Cricket Team',
        img:'./images.jpg',
        para: 'Amir was born on 13 April 1992 in Changa Bangial, Gujar Khan, Punjab, Pakistan. He is the son of Raja Muhammad Fayyaz.[16][17] He was the second youngest of seven children. "Wasim Akram is my favourite bowler, he my idol. When I used to watch him on TV, I would try to see what exactly he was doing with the ball. Then I would go outside and imitate his actions and bowling."[18',
    }
]
let person = 0;

function showreview(add){
    var item = personinfo[add]
    playername.textContent = item.name
    personimg.src= item.img
    playerprof.textContent = item.profession
    aboutplayer.textContent = item.para
}
nextbtn.addEventListener('click',()=>{
    person = ++person;
    if(person <0 || person > personinfo.length - 1 ){
        person = 0;
    }
    showreview(person)
})

previousbtn.addEventListener('click',()=>{
    person = --person;
    if(person <0){
        person = personinfo.length - 1
    }
    showreview(person)
})
surprise.addEventListener('click',()=>{
    var random = Math.floor(Math.random() *personinfo.length)
    showreview(random)
})

