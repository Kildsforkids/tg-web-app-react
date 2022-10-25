import Button from "../Button/Button";

function Header() {

    const tg = window.Telegram.WebApp

    function onClose() {
        tg.close()
    }

    return (
        <div className="header">
            <Button onClick={onClose}>Закрыть</Button>
            <span className="username">
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    )
}

export default Header;