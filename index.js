import React, { PureComponent, Fragment } from 'react';
import { Animated } from 'react-native';

import Svg, { Circle } from 'react-native-svg';
import PropTypes from 'prop-types';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

class CircleProgress extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            progress: new Animated.Value(0)
        };
    }

    componentWillUnmount = () => {
        const { progress }  = this.state;
        Animated.timing(progress).stop();
    }

    componentDidMount = () => {
        const { progress }  = this.state;
        const { duration }  = this.props;
        Animated.timing(progress, { toValue: 1, duration }).start();
    }

    render() {
        const { progress } = this.state;
        const { size, strokeWidth, strokeColor, strokeLinecap, strokeBackgroundColor } = this.props;
        const radius = (size - strokeWidth) / 2;
        const circumference = radius * 2 * Math.PI;
        const alpha = progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, Math.PI * 2]
        });
        const strokeDashoffset = Animated.multiply(alpha, radius);
        return (
            <Fragment>
                <Svg width={size} height={size}>
                    <Circle 
                        stroke={strokeBackgroundColor}
                        fill='none'
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        strokeLinecap={strokeLinecap}
                        {...{ strokeWidth }}/>
                    <AnimatedCircle
                        stroke={strokeColor}
                        fill='none'
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        strokeLinecap={strokeLinecap}
                        strokeDasharray={`${circumference} ${circumference}`}
                        {...{ strokeWidth, strokeDashoffset }} />
                </Svg>
            </Fragment>
        );
    }
}

CircleProgress.defaultProps = {
    duration: 20000,
    size: 100,
    strokeWidth: 5,
    strokeColor: '#fff',
    strokeBackgroundColor: '#000',
    strokeLinecap: 'square'
};

CircleProgress.propTypes = {
    duration: PropTypes.number,
    size: PropTypes.number,
    strokeWidth: PropTypes.number,
    strokeColor: PropTypes.string,
    strokeBackgroundColor: PropTypes.string,
    strokeLinecap: PropTypes.string
}

export default CircleProgress;