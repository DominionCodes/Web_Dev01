//Basic Types
let age: number = 20 
let course: string = 'Typescript'  
let lessonCom: boolean = true
let X: any = false

let courses: string[] = ['css', 'js']
let arr: any[] = [true, 123, '1234']
let ArrofArr: string [][] = [['1234'], ['some']]

//Tiples - Are array that store multi element in a specific order eg [string, number]
let someone: [string, number] = ['john', 21 ]
//bunch of arrays in tiples
let people: [string, number][] = [
    ['peter', 12],
    ['paul', 16]
]

//objects
let plates :{
    name:string,
    age: number,
    isPassing: boolean
} = {
    name: 'matt',
    age: 31,
    isPassing: true

} //custom object adv
type company = {
    name: string,
    streetNo: number,
    isAlive: Boolean
}
let company0f1: company = {
    name: 'max metal com ltd',
    streetNo: 199,
    isAlive: true
} 
//interface 
interface student {
     name: string,
    streetNo: number,
    isAlive: Boolean
}

//union - is a form of setting a varible to either string or number
let result: string | number = 3
//form of using type + union
type Passing = 'Passed' | 'failed'
let paul: Passing = 'Passed' //paul using passing can't be assigned to something different

//types Anssertion - allow user to specify the change they want with the varible set to any
let SR: any = 38
SR = <string> 'ddd' //

//functions
function Se(Pass1: number, pass2: Number): number {
    return 6
} Se(4,7) //ie func passes only number and return only number
function Ger():void { //the consent void use only when the func isn;t returning anything
    console.log('marked')
}
function done(arrays:number[]) {
    return done[0]
}

//generics function 
function all<Arrytype>(arr: Arrytype[]){ //the function <Arrytype> allow me to pass in the type of vairble i want to return 
    return arr[0];
}
all<number>([1,3, 3])//by adding to the element i want return i can return differnt type
all<string>(['sddd', '444'])//either strings
all<boolean>([true, false])//boolean once i pass the instruction.

//eums
enum remarks {
    passed = 'congratulation you passed',
    failed = 'soory to say but you failed',
    manage = 'you were promoted by trial',
}

function studentInfo(params:type):void {
    
}