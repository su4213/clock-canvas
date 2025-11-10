function animate(time) {
    const now = new Date();
    const sec = now.getSeconds();
    const min = now.getMinutes();
    let hr = now.getHours();
    hr = hr >= 12 ? hr - 12 : hr;
    
    // 获取窗口尺寸，设置Canvas为全屏
    const canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");
    
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 将坐标轴移至屏幕中心
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(-Math.PI / 2);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.lineCap = "round";

    // 绘制12个小时刻度
    ctx.save();
    for (let i = 0; i < 12; i++) {
        ctx.beginPath();
        ctx.rotate(Math.PI / 6);
        ctx.moveTo(100, 0);
        ctx.lineTo(120, 0);
        ctx.stroke();
    }
    ctx.restore();

    // 绘制60个分钟刻度
    ctx.save();
    ctx.lineWidth = 3;
    for (let i = 0; i < 60; i++) {
        ctx.beginPath();
        ctx.rotate(Math.PI / 30);
        ctx.moveTo(110, 0);
        ctx.lineTo(120, 0);
        ctx.stroke();
    }
    ctx.restore();

    // 时针
    ctx.save();
    ctx.rotate((hr * 30 + min * 0.5) * Math.PI / 180);
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    ctx.lineTo(80, 0);
    ctx.stroke();
    ctx.restore();

    // 分针
    ctx.save();
    ctx.rotate((min * 6 + sec * 0.1) * Math.PI / 180);
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    ctx.lineTo(100, 0);
    ctx.stroke();
    ctx.restore();

    // 秒针
    ctx.save();
    ctx.rotate(sec * 6 * Math.PI / 180);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-30, 0);
    ctx.lineTo(110, 0);
    ctx.stroke();
    ctx.restore();

    ctx.restore();
    window.requestAnimationFrame(animate);
}

// 监听窗口大小变化，实时更新Canvas尺寸
window.addEventListener('resize', () => {
    const canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

window.requestAnimationFrame(animate);