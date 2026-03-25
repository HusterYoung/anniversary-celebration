# 一周年纪念日网页 ❤️

## 使用说明

### 1. 准备文件

#### 视频文件
- 将你制作的回顾视频命名为 `memory-video.mp4`
- 放在与 `index.html` 同一目录下

#### 照片文件
- 创建一个 `images` 文件夹
- 将你们的照片放入 `images` 文件夹
- 照片命名为：`photo1.jpg`, `photo2.jpg`, `photo3.jpg` 等
- 支持 jpg、png 等常见图片格式

### 2. 修改照片列表

打开 `script.js` 文件，找到开头的 `photos` 数组，根据你实际的照片数量和文件名进行修改：

```javascript
const photos = [
    'images/photo1.jpg',
    'images/photo2.jpg',
    // 添加更多照片...
];
```

### 3. 打开网页

直接双击 `index.html` 文件，或者在浏览器中打开即可。

### 4. 功能说明

- **视频播放**：页面加载后会自动循环播放视频
- **星星掉落**：星星会从顶部随机位置掉落
- **查看照片**：点击星星会随机显示一张照片
- **关闭照片**：点击 × 按钮、照片外的区域或按 ESC 键关闭照片

### 5. 自定义设置

在 `script.js` 中可以调整：
- `interval`: 星星生成间隔（毫秒）
- `maxStars`: 屏幕上最多同时存在的星星数量

## 文件结构

```
Snake_game/
├── index.html          # 主页面
├── style.css           # 样式文件
├── script.js           # 交互逻辑
├── memory-video.mp4    # 你的视频（需要添加）
└── images/             # 照片文件夹（需要创建）
    ├── photo1.jpg
    ├── photo2.jpg
    └── ...
```

## 提示

- 建议使用 Chrome、Firefox 或 Safari 浏览器
- 视频格式建议使用 MP4（H.264 编码）以获得最佳兼容性
- 照片建议压缩后使用，避免文件过大影响加载速度

祝你们一周年快乐！🎉
