// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "আপনার আসল নামটা জানিনা",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "যাইহোক কোনো ব্যপার না",  // 同上...
        "আমি আপনার একজন ওয়েল উইশার",
        "তাই এখন একটা গুরুত্বপূর্ণ উপদেশ দিবো",
        "মনোযোগ দিয়ে শুনেন..",
        "--কখনো আশা ছেড়ে দিয়ো না--",
        "আর....",
        "হতাশ হয়ে কাচ্চি খেয়ো না",
        "বলাতো যায় না,",
        "কোথাকার পানি কোথায় গড়ায়😅",
        "হ্যাব এ গুড ডে উইথ ফ্যামিলী এন্ড ফ্রেন্ডস ❤️",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "আমার কাছে আপনি মীরাবাঈ😌": "./imgs/xiaokeai.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "অন্ধকারতো। এখানে ক্লিক করে বাতি জ্বালান ",
        play: "মিউজিক অন করেন",
        bannar_coming: "এখন কি বলি শুনেন..",
        balloons_flying: "জন্মদিনের অনেক অনেক শুভেচ্ছা",
        cake_fadein: "কেক কাটার জন্য রেডি হন",
        light_candle: "এবার মোমবাতিতে ফুঁ দেন",
        wish_message: "হ্যাপী বার্থ ডে টু ইউ মীরাবাঈ👏",
        story: "এবার কিছু গুরুত্বপূর্ণ কথা আছে...",
    }
};
