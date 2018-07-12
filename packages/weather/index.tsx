/// <reference path="./index.d.tsx" />

import * as React from 'react';

class Weather extends React.Component<Props, {}> {

    render() {
        const { name } = this.props;
        return <div>
            WEATHER WIDGET - {name}
        </div>;
    }

}

export default Weather;
