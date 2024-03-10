import cssStyle from './Penguin.module.css';

export default function Penguin(){
    return <>
    <div className={cssStyle.container}>
        <p>Hello,<br />World!</p>
        <div className={cssStyle.penguin}>
            <div className={cssStyle.penguin_bottom}>
                <div className={cssStyle.right_hand}></div>
                <div className={cssStyle.left_hand}></div>
                <div className={cssStyle.right_feet}></div>
                <div className={cssStyle.left_feet}></div>
            </div>
            <div className={cssStyle.penguin_top}>
                <div className={cssStyle.right_cheek}></div>
                <div className={cssStyle.left_cheek}></div>
                <div className={cssStyle.belly}></div>
                <div className={cssStyle.right_eye}>
                    <div className={cssStyle.sparkle}></div>
                </div>
                <div className={cssStyle.left_eye}>
                    <div className={cssStyle.sparkle}></div>
                </div>
                <div className={cssStyle.blush_right}></div>
                <div className={cssStyle.blush_left}></div>
                <div className={cssStyle.beak_top}></div>
                <div className={cssStyle.beak_bottom}></div>
            </div>
        </div>
    </div>
    </>
}