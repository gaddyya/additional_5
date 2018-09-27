module.exports = function check(str, bracketsConfig) {

    let middleStrLength = str.length / 2;
    let bracketsConfigLength = bracketsConfig.length;

    // проверяем на четность, если не четное - то сразу false
    if (str.length % 2 != 0) {
        return false;
    }
    // проходимся по массиву и удаляем скобки изнутри
    for (let i = 0; i < middleStrLength; i++) {
        for (let j = 0; j < bracketsConfigLength; j++) {
            let bracketsType = bracketsConfig[j][0] + bracketsConfig[j][1];

            while (str.indexOf(bracketsType) >= 0) {
                str = str.replace(bracketsType, '');
                console.log(str);
            }
        }
    }

    return (str == '') ? true : false;
}