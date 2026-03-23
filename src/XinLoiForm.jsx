import { useState, useEffect } from 'react';
import './App.css';

const XinLoiForm = () => {
    const [hearts, setHearts] = useState([]);
    const [isOpened, setIsOpened] = useState(false);
    const [showNextPage, setShowNextPage] = useState(false);
    // State mới cho lá thư ẩn
    const [showSadLetter, setShowSadLetter] = useState(false);

    const [noClickCount, setNoClickCount] = useState(0);
    const [yesScale, setYesScale] = useState(1);
    const [noOffset, setNoOffset] = useState({ x: 0, y: 0 });

    const beggingPhrases = [
        "Cậu tha lỗi cho tớ nhé? ❤️",
        "Tớ biết lỗi thật rồi mà... 🥺",
        "Năn nỉ đó, tớ hứa sẽ ngoan! 🙏",
        "Cậu tính giận tớ đến bao giờ? 😢",
        "Trái tim tớ đang rỉ máu này... 💔",
        "Thôi mà, tối tớ qua đón đi ăn lẩu nha! ✨🍲",
        "Bắt hụt rồi kìa! Tha lỗi đi cho nhanh 😜",
        "Chịu thua chưa? Bấm đồng ý đi nào! 😂"
    ];

    const bgGradients = [
        "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
        "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
        "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
        "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)",
        "linear-gradient(120deg, #ff0844 0%, #ffb199 100%)",
    ];

    useEffect(() => {
        const arrTim = ['❤️', '💖', '💕', '✨', '🥺', '🌸'];
        const newHearts = Array.from({ length: 45 }).map((_, i) => ({
            id: i,
            icon: arrTim[Math.floor(Math.random() * arrTim.length)],
            left: Math.random() * 100 + 'vw',
            animationDuration: (Math.random() * 3 + 4) + 's',
            animationDelay: Math.random() * 5 + 's',
            fontSize: (Math.random() * 15 + 15) + 'px'
        }));
        setHearts(newHearts);
    }, []);

    const chapNhan = () => setShowNextPage(true);

    const diChuyenNutKhong = () => {
        if (noClickCount < beggingPhrases.length - 1) {
            const maxX = Math.min(160, window.innerWidth * 0.25);
            const maxY = Math.min(100, window.innerHeight * 0.2);
            const minX = 70;
            const minY = 50;

            const jumpX = (Math.random() * (maxX - minX) + minX) * (Math.random() > 0.5 ? 1 : -1);
            const jumpY = (Math.random() * (maxY - minY) + minY) * (Math.random() > 0.5 ? 1 : -1);

            setNoOffset({ x: jumpX, y: jumpY });
        }
    };

    const bamKhong = () => {
        if (noClickCount < beggingPhrases.length - 1) {
            setNoClickCount(prev => prev + 1);
            setYesScale(prev => Math.min(prev + 0.05, 1.3));

            if (noClickCount >= 1) {
                diChuyenNutKhong();
            }
        }
    };

    const neChuot = () => {
        if (noClickCount >= 2) {
            diChuyenNutKhong();
        }
    };

    const currentBeggingPhrase = beggingPhrases[Math.min(noClickCount, beggingPhrases.length - 1)];
    const isMaxScale = noClickCount >= beggingPhrases.length - 1;
    const currentBgIndex = Math.min(Math.floor(noClickCount / 2), bgGradients.length - 1);
    const currentBackground = bgGradients[currentBgIndex];

    const HeartBackground = () => (
        <>
            {hearts.map(heart => (
                <div key={heart.id} className="heart" style={{
                    left: heart.left,
                    animationDuration: heart.animationDuration,
                    animationDelay: heart.animationDelay,
                    fontSize: heart.fontSize
                }}>
                    {heart.icon}
                </div>
            ))}
        </>
    );

    if (showSadLetter) {
        return (
            <div className="xinloi-container dark-bg">
                <div className="glass-card dark-card slide-up">
                    <h2 className="title dark-title">Vài lời thật lòng... 😞</h2>
                    <div className="message-content dark-text">
                        <p>Tớ đã làm cậu buồn nhiều lắm , tớ thật sự , thật sự rất ân hận ,tớ đã gặp được một người tuyệt vời nhất thế gian nhưng lại vì cái ngu của mình mà đánh mất .</p>
                        <p>Đến giờ , 2026 hay thậm chí 10 năm nữa cũng không nguôi , tớ thật sự hi vọng có thể bù đắp được những gì tớ đã làm sai.</p>
                        <p>Tớ đã quá ngây thơ , thêm tuổi nhưng không hề lớn hơn chút nào , chỉ như một thằng to xác , rời xa cậu xong tớ mới nhận ra tớ phải lớn lên bằng trải nghiệm , và cậu đã là người chịu sự hi sinh đó</p>
                        <p>Đêm dài đó , tớ vẫn nhớ như in , tớ dằn vặt, mấy năm nay cứ đêm đến tớ lại suy , tớ buồn lắm , tớ nghĩ đến hình ảnh cậu khóc , trầy trật giữa đường ... , tớ nhớ tới đêm đó , tự tưởng tượng mình ngu đến mức nào mà lại bất cẩn , hậu đậu , không lo được cho cậu , tất cả những nỗi đau thể xác ấy , tớ thề , nếu tớ có thể chịu đựng giúp cậu , tớ muốn chịu thêm gấp ngàn lần</p>
                        <p></p>
                        <br />
                        <p><i>Xin lỗi vì tất cả, cậu thực sự là người quan trọng nhất , nếu không có cậu , 2 lần , tớ vẫn không thức tỉnh lên nổi , không mục tiêu , chỉ chơi vơi trong cuộc đời vô định , cuộc đời tớ thực sự chả là gì nếu không gặp được cậu</i></p>
                        <p><i>Tớ hiện đang cố phát triển hơn mỗi ngày , điện thoại cũng chẳng còn game , mỗi ngày cố học hành để đến Nhật , tớ thực sự đang có động lực, tớ nghĩ lần này nó lớn nhất trong cuộc đời rồi , cảm ơn cậu rất nhiều!</i></p>
                        <p><i>Tớ cũng nhìn qua bức ảnh cậu đi chơi với Chika ngày 5/3 rồi nhé , cậu xinh lắm ,mỗi lần nhìn bức ảnh cuối , tớ thề là tớ rất thổn thức và đau lòng , tim như đập chậm , ông cha thật nói không sai , bông hoa xinh đẹp nhất là bông hoa không thuộc về ai . Cho tớ xin lỗi Chika nữa , thật sự xin lỗi cậu ấy vì đã không thể chăm sóc cậu tốt</i></p>
                        <p><i>Cậu thực sự thay đổi một con người !</i></p>
                    </div>
                </div>
            </div>
        );
    }

    if (showNextPage) {
        return (
            <div className="xinloi-container success-bg">
                <HeartBackground />
                <div className="glass-card success-card zoom-in">
                    <div className="icon-header">🥰</div>
                    <h2 className="title huge-title">Chốt Đơn! 🎉</h2>
                    <p className="message clear-message">
                        Cảm ơn công chúa đã rộng lượng tha thứ! ❤️<br /><br />
                        Tớ hứa từ nay sẽ luôn lắng nghe, không cãi lời (hẹ hẹ) , iu nhắm , lúc nào cũng nhớ nhung nên tớ mới buồn vì đôi khi cậu không quan tâm đó ạ và yêu thương cậu nhiều hơn.<br /><br />
                        <b>Hè này lên đồ vô nha , tớ sẽ đưa cậu đi ăn ốc 🏎️💨</b><br />
                        <b>Mua thật nhiều hoa quả cậu thích 🍎🍓</b><br />
                        <b>Và đặc biệt là sẽ nói yêu thương cậu nhiều hơn nà , tớ còn tồn mấy câu sến súa cơ hẹ hẹ ❤️</b>
                    </p>

                    <button className="btn-secret" onClick={() => setShowSadLetter(true)}>
                        Nhưng mà... tớ có một bí mật muốn nói 👉👈
                    </button>
                </div>
            </div>
        );
    }

    if (!isOpened) {
        return (
            <div className="xinloi-container envelope-bg">
                <HeartBackground />
                <div className="envelope-wrapper" onClick={() => setIsOpened(true)}>
                    <div className="envelope">
                        <div className="flap"></div>
                        <div className="body"></div>
                        <div className="letter-preview">
                            <p>Gửi Heo Béo...</p>
                        </div>
                        <div className="heart-seal">❤️</div>
                    </div>
                    <p className="click-hint pulse-text">Chạm vào thư để mở nè 👉👈</p>
                </div>
            </div>
        );
    }

    return (
        <div
            className="xinloi-container dynamic-bg"
            style={{ backgroundImage: currentBackground }}
        >
            <HeartBackground />
            <div className="glass-card letter-card slide-up">

                <div className="content-layer">
                    <div className="avatar-wrapper">
                        <img src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" alt="Our Memory" />
                    </div>

                    <h2 className="title">Thư Xin Lỗi Khẩn Cấp... 💌</h2>
                    <div className="message-content">
                        <p><b>Gửi cậu - người tớ thương nhất nha! ❤️</b></p>
                        <p>Mấy hôm nay chiến tranh lạnh, tớ ăn không ngon ngủ không yên. Tớ biết mình đã vô tâm, nói những câu làm cậu buồn và tủi thân. Thật sự tớ rất hối hận. 😞</p>
                        <p>Cậu là điều tuyệt vời nhất mà tớ có. Tớ không muốn vì chút nông nổi mà đánh mất nụ cười của cậu. Cho tớ cơ hội sửa sai nhé, tớ hứa sẽ cất gọn cái tôi đi và ôm cậu thật chặt!</p>
                        <p><i>Tha lỗi cho Baka này nha?</i></p>
                    </div>

                    <p className="begging-text shake" key={noClickCount}>
                        {currentBeggingPhrase}
                    </p>
                </div>

                <div
                    className="btn-container-spacious"
                    style={{
                        flexDirection: noClickCount === 1 ? 'row-reverse' : 'row'
                    }}
                >
                    <button
                        type="button"
                        className="btn-yes-premium"
                        style={{ transform: `scale(${yesScale})` }}
                        onClick={chapNhan}
                    >
                        Đồng ý tha thứ!
                    </button>

                    <button
                        type="button"
                        className={`btn-no-premium ${isMaxScale ? 'hidden' : ''}`}
                        onClick={isMaxScale ? chapNhan : bamKhong}
                        onMouseEnter={neChuot}
                        style={{
                            ...(noClickCount >= 2 ? {
                                position: 'absolute',
                                left: '50%',
                                top: '50%',
                                transform: `translate(calc(-50% + ${noOffset.x}px), calc(-50% + ${noOffset.y}px))`
                            } : {})
                        }}
                    >
                        Không bao giờ
                    </button>
                </div>
            </div>
        </div>
    )
}

export default XinLoiForm;