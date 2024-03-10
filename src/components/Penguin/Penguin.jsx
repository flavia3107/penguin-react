import cssStyle from 'Penguin.module.css';

export default function Penguin(){
    return <>
    <div className={cssStyle.container}>
        <p>Hello,<Br />World!</p>
        <div className={cssStyle.penguin}>
            <div className={cssStyle.penguin-bottom}>
                <div className={cssStyle.right-hand}></div>
                <div className={cssStyle.left-hand}></div>
                <div className={cssStyle.right-feet}></div>
                <div className={cssStyle.left-feet}></div>
            </div>
            <div className={cssStyle.penguin-top}>
                <div className={cssStyle.right-cheek}></div>
                <div className={cssStyle.left-cheek}></div>
                <div className={cssStyle.belly}></div>
                <div className={cssStyle.right-eye}>
                    <div className={cssStyle.sparkle}></div>
                </div>
                <div className={cssStyle.left-eye}>
                    <div className={cssStyle.sparkle}></div>
                </div>
                <div className={cssStyle.blush-right}></div>
                <div className={cssStyle.blush-left}></div>
                <div className={cssStyle.beak-top}></div>
                <div className={cssStyle.beak-bottom}></div>
            </div>
        </div>
    </div>
    </>
}