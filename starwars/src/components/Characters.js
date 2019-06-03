import React from 'react';
import Information from './Info';

const Characters = props => {
    return (
        <div className="ha">
            {props.data.map(item => 
                <Information characterData={item} />
            )}    
        </div>
    );
};

export default Characters;