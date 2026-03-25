// 照片数组 - 自动生成 images 文件夹中的所有照片路径
const photos = Array.from({ length: 23 }, (_, i) => `images/photo${i + 1}.jpg`);

// 星星生成配置
const starConfig = {
    interval: 800, // 每隔多少毫秒生成一颗星星
    maxStars: 20   // 屏幕上最多同时存在的星星数量
};

let currentStarCount = 0;

// 生成随机数
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 创建星星
function createStar() {
    if (currentStarCount >= starConfig.maxStars) return;

    const star = document.createElement('div');
    star.className = 'star';

    // 随机水平位置
    const leftPosition = random(0, window.innerWidth - 30);
    star.style.left = leftPosition + 'px';
    star.style.top = '-30px';

    // 随机掉落时间（3-6秒）
    const fallDuration = random(3, 6);
    star.style.animationDuration = `${fallDuration}s, 1s`;

    // 鼠标悬停事件 - 显示提示框
    star.addEventListener('mouseenter', function() {
        const tooltip = document.createElement('div');
        tooltip.className = 'star-tooltip';
        tooltip.textContent = '想看看星星里面是什么吗？';
        star.appendChild(tooltip);
    });

    // 鼠标离开事件 - 移除提示框
    star.addEventListener('mouseleave', function() {
        const tooltip = star.querySelector('.star-tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    });

    // 点击事件
    star.addEventListener('click', function(e) {
        e.stopPropagation();
        showRandomPhoto();
        star.remove();
        currentStarCount--;
    });

    document.getElementById('starsContainer').appendChild(star);
    currentStarCount++;

    // 星星掉落完成后自动移除
    setTimeout(() => {
        if (star.parentNode) {
            star.remove();
            currentStarCount--;
        }
    }, fallDuration * 1000);
}

// 显示随机照片
function showRandomPhoto() {
    const modal = document.getElementById('photoModal');
    const modalImg = document.getElementById('modalImage');

    // 随机选择一张照片
    const randomPhoto = photos[random(0, photos.length - 1)];
    modalImg.src = randomPhoto;

    modal.style.display = 'block';

    // 添加照片加载错误处理
    modalImg.onerror = function() {
        alert('照片加载失败，请确保照片路径正确！');
        modal.style.display = 'none';
    };
}

// 关闭模态框
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('photoModal').style.display = 'none';
});

// 点击模态框背景关闭
document.getElementById('photoModal').addEventListener('click', function(e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});

// 定期生成星星
setInterval(createStar, starConfig.interval);

// 页面加载完成后的初始化
window.addEventListener('load', function() {
    // 确保视频自动播放
    const video = document.getElementById('memoryVideo');
    video.play().catch(function(error) {
        console.log('视频自动播放失败，可能需要用户交互');
    });

    // 立即生成几颗星星
    for (let i = 0; i < 3; i++) {
        setTimeout(createStar, i * 300);
    }
});

// 键盘 ESC 键关闭模态框
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.getElementById('photoModal').style.display = 'none';
    }
});

// 音量控制
const volumeBtn = document.getElementById('volumeBtn');
const video = document.getElementById('memoryVideo');

volumeBtn.addEventListener('click', function() {
    if (video.muted) {
        video.muted = false;
        volumeBtn.textContent = '🔊';
        volumeBtn.title = '点击关闭声音';
    } else {
        video.muted = true;
        volumeBtn.textContent = '🔇';
        volumeBtn.title = '点击开启声音';
    }
});
