import React from 'react';

function ClassList({classInfo, buttonClick}){
return (
<ul >
<h1>Classes</h1>
{classInfo.map((currentClass, mainIndex) => {
    return (
        <li className='center-list' key={mainIndex} ><button data-key={mainIndex} onClick={buttonClick} className="button-74" role="button" >{currentClass.Class}</button>
        <ul className='button-list'>
            {currentClass.Playstyles.map((currentPlaystyle, index) =>
            {
                const newIndex =((mainIndex+1)*10) + index;
                return (
                <li key={newIndex}><button onClick={buttonClick} className="button-74" role="button"  mainkey={mainIndex} subkey={index}>{currentPlaystyle.Class}</button></li>
            )})}
        </ul>
        </li>
    )
}

)}
</ul>
);
}

export default ClassList;