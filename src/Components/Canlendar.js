import React, {useEffect, useState} from 'react'
import Format from '../Format';
import './calendar.css';
import theme from "../theme";
import { ThemeProvider } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button";
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

function Calendar() {
    const [ dateState, setDateState ] = useState(new Date(Date.now()));
    const [ monthState, setMonthState ] = useState(new Date(Date.now()).getMonth());
    let date = Format.msToDateObject(dateState);
    const [ currentDayState, setCurrentDayState ] = useState(date.currentDay);

    const fadeNonMonthDays = (top, bottom, bottomBottom) => {
        let topRow = document.getElementById('first-week');
        let bottomRow = document.getElementById('last-week');
        let bottomBottomRow = document.getElementById('last-last-week');

        console.log(topRow)
        if(bottomRow){
            for(let i=0; i<7; i++){
                console.log(`Top row: ${topRow.childNodes[i].innerHTML}`)
                if(topRow.childNodes[i].innerHTML > 7){
                    topRow.childNodes[i].style.color="#9599a1";
            
                } else {
                    topRow.childNodes[i].style.color='#ffffff';
                }
            }
        }
        if(bottomRow){
            for(let i=0; i<7; i++){
                console.log(`Bottom row: ${bottomRow.childNodes[i].innerHTML}`)
                if(bottomRow.childNodes[i].innerHTML < 23){
                    bottomRow.childNodes[i].style.color="#9599a1";
            
                } else {
                    bottomRow.childNodes[i].style.color='#ffffff';
                }
            }
        }
        if(bottomBottomRow){
            for(let i=0; i<7; i++){
                console.log(`Bottom Bottom row: ${bottomRow.childNodes[i].innerHTML}`)
                bottomBottomRow.childNodes[i].style.color='#212838';
                if(bottomBottomRow.childNodes[i].innerHTML < 23){
                    bottomBottomRow.childNodes[i].innerHTML='';
            
                } else {
                    bottomBottomRow.childNodes[i].style.color='#ffffff';
                }
            }
        }
        console.log('this function ran');
    }
    useEffect(() => {
        let currentDay = document.getElementById(`c${currentDayState}`);
        if (!!date.currentDay) {
            currentDay.style.backgroundColor='#4072fc';
            currentDay.style.borderRadius='50%';
        } else {
            currentDay.style.backgroundColor = '#212838';
        }

        console.log(currentDay)
        fadeNonMonthDays(date);
        console.log(date);
      }, [dateState])
      
      const previousMonth = () => {
        setDateState(new Date(dateState.setMonth(monthState - 1)));
        setMonthState(dateState.getMonth());
    }

      const nextMonth = () => {
        setDateState(new Date(dateState.setMonth(monthState + 1)));
        setMonthState(dateState.getMonth());
    } 
    return (
        <ThemeProvider theme={theme} >
            <div className="calendar-container">
                <div className="calendar-switch-buttons"><Button onClick={previousMonth} className="arrowButton" theme={theme} type="light" variant="contained" color="secondary"><ArrowLeftIcon /></Button><div className="calendar-header">{Format.msToDate(dateState)}</div><Button onClick={nextMonth} className="arrowButton" variant="contained" color="secondary"><ArrowRightIcon /></Button></div>
                <table className='calendar-table'>
                    <tbody>
                        <tr className="day-header"><th>Sun</th><th>Mon</th><th>Tues</th><th>Wed</th><th>Thurs</th><th>Fri</th><th>Sat</th></tr>
                        <tr id="first-week" className="week week1"><td id='c1'>{date.c1}</td><td id='c2'>{date.c2}</td><td id='c3'>{date.c3}</td><td id='c4'>{date.c4}</td><td id='c5'>{date.c5}</td><td id='c6'>{date.c6}</td><td id='c7'>{date.c7}</td></tr >
                        <tr className="week week2"><td id='c8'>{date.c8}</td><td id='c9'>{date.c9}</td><td id='c10'>{date.c10}</td><td id='c11'>{date.c11}</td><td id='c12'>{date.c12}</td><td id='c13'>{date.c13}</td><td id='c14'>{date.c14}</td></tr>
                        <tr className="week week3"><td id='c15'>{date.c15}</td><td id='c16'>{date.c16}</td><td id='c17'>{date.c17}</td><td id='c18'>{date.c18}</td><td id='c19'>{date.c19}</td><td id='c20'>{date.c20}</td><td id='c21'>{date.c21}</td></tr>
                        <tr className="week week4"><td id='c22'>{date.c22}</td><td id='c23'>{date.c23}</td><td id='c24'>{date.c24}</td><td id='c25'>{date.c25}</td><td id='c26'>{date.c26}</td><td id='c27'>{date.c27}</td><td id='c28'>{date.c28}</td></tr>
                        <tr id="last-week" className="week week5"><td id='c29'>{date.c29}</td><td id='c30'>{date.c30}</td><td id='c31'>{date.c31}</td><td id='c32'>{date.c32}</td><td id='c33'>{date.c33}</td><td id='c34'>{date.c34}</td><td id='c35'>{date.c35}</td></tr>
                        <tr id="last-last-week" className="week week6"><td id='c36'>{date.c36}</td><td id='c37'>{date.c37}</td><td id='c38'>{date.c38}</td><td id='c39'>{date.c39}</td><td id='c40'>{date.c40}</td><td id='c41'>{date.c41}</td><td id='c42'>{date.c42}</td></tr>
                    </tbody>
                </table>
            </div>
        </ThemeProvider>
    )
}

export default Calendar
