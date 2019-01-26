import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
    return _.round(_.sum(data)/data.length);
}

export default (pros) => {
    return (
        <div>
            <Sparklines height={120} width={180} data={pros.data}>
                <SparklinesLine color={pros.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(pros.data)} {pros.units}</div>
        </div>
    );
}