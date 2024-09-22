export const getBoldedResponse = (responseText) => {
    let responseArray = responseText.split('**');
    let newResponse = '';
    for (let i = 0; i < responseArray.length; i++) {
        if(i%2 === 0){
            newResponse += responseArray[i];
        }
        else {
            newResponse += "<b>"+responseArray[i] + "</b>";
        }
    }
    return newResponse;
}

export const getFormattedResponse = (responseText) => {
    return responseText.split('*').join('</br>')
}
