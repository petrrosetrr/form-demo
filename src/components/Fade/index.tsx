import React, { useEffect, useState } from "react";
import './index.scss';

interface IProps {
    show: boolean;
    className?: string;
}

const Fade: React.FC<IProps> = ({show, className, children}) => {
    const [shouldRender, setShouldRender] = useState(show);

    useEffect(() => {
        if (show) setShouldRender(true);
    }, [show]);

    const onAnimationEnd = () => {
        if (!show) setShouldRender(false);
    };


    return (
        <>
            {
                shouldRender &&
                <div
                    className={className}
                    style={{ animation: `${show ? 'fadeIn' : 'fadeOut'} 0.4s`, position: 'relative' }}
                    onAnimationEnd={onAnimationEnd}
                >
                    {children}
                </div>

            }
        </>
    );
};

export default Fade;
