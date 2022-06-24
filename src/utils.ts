import { Visibility, Weather } from "./enum";
import { NewDiaryEntry } from "./types";



const parseComment = ( commentFromRequest:any):string =>{
    if (!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing comment')
    }
    return commentFromRequest
}

const parseDate = (dateFromRequest:any):string =>{
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Incorrect or missing date');
    }
    return dateFromRequest
}

const parseWeather = ( weatherFromRequest:any): Weather => {
    if (!isString( weatherFromRequest ) || !isWeather(weatherFromRequest)) {
        throw new Error ('Incorrect or missing Weather')
    }
    return weatherFromRequest
}

const parseVisibility = (visiblityFromRequest:any): Visibility =>{
    if (!isString( visiblityFromRequest ) || !isVisibility(visiblityFromRequest)) {
        throw new Error ('Incorrect or missing visiblity')
    }
    return visiblityFromRequest
}

const isWeather = (param:any) : boolean=>{
    return Object.values(Weather).includes(param)
}

const isDate = (date:string):boolean =>{
    return Boolean(Date.parse(date))
}

const isString = (string :string):boolean =>{
    return  typeof string  === 'string' 
    // ||  string instanceof String
}

const isVisibility = ( param:any ):boolean =>{
    return Object.values(Visibility).includes(param)
}

const toNewDiaryEntry = (objet:any): NewDiaryEntry =>{
    const newEntry: NewDiaryEntry = {
        comment: parseComment( objet.comment ),
        date: parseDate( objet.date),
        weather : parseWeather( objet.weather),
        visibility : parseVisibility( objet.visibility )
    }
    return newEntry
}

export default toNewDiaryEntry