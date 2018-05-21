setTimeout(function() {
    document.getElementById('body').classList.add('day');
    document.getElementById('day').classList.add('active');
    document.getElementById('sun').style.fill = 'yellow';
}, 0);

const changeTime = (tod) => {
    if (tod === 'day') {
        document.getElementById('night').classList.remove('active');
        document.getElementById('day').classList.add('active');
        document.getElementById('body').classList.remove('night');
        setTimeout(function() {
            document.getElementById('body').classList.add('day');
            document.getElementById('sun').style.fill = 'yellow';
        }, 1201);
    }  
    if (tod === 'night') {
        document.getElementById('day').classList.remove('active');
        document.getElementById('night').classList.add('active');
        document.getElementById('body').classList.remove('day');
        setTimeout(function() {
            document.getElementById('body').classList.add('night');
            document.getElementById('sun').style.fill = 'black';
        }, 1201);
    }  
    
}
