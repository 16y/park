---
title: 核心服务
layout: page
---

<style>
/* ===== 核心服务专题页样式 ===== */

/* 页面横幅 */
.page-banner {
    position: relative;
    height: 50vh;
    min-height: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;
    background: linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 100%);
    margin: -60px -20px 0;
}
.page-banner::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url('/images/slide-service.jpg') center/cover no-repeat;
    opacity: 0.2;
    z-index: 0;
}
.page-banner-content {
    position: relative;
    z-index: 1;
    padding: 120px 20px 60px;
}
.page-banner h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    margin: 0 0 16px;
}
.page-banner h1 .highlight { color: var(--accent, #00e5ff); }
.page-banner p {
    font-size: 1.1rem;
    color: rgba(255,255,255,0.7);
    max-width: 600px;
    margin: 0 auto;
}

/* 服务内容 */
.services-page { padding: 60px 0 80px; }

/* 服务区块 */
.service-block {
    margin-bottom: 70px;
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 20px;
    padding: 44px 36px;
    transition: all 0.3s;
}
.service-block:hover {
    border-color: rgba(0,229,255,0.12);
    background: rgba(0,229,255,0.03);
}
.service-block:last-child { margin-bottom: 0; }

.service-block-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
}
.service-block-icon {
    font-size: 2.5rem;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,229,255,0.08);
    border-radius: 16px;
    flex-shrink: 0;
}
.service-block h2 {
    font-size: 1.6rem;
    margin: 0;
}
.service-block h2 .highlight { color: var(--accent, #00e5ff); }
.service-block > p {
    color: rgba(255,255,255,0.65);
    line-height: 1.8;
    font-size: 0.95rem;
    margin: 0 0 24px 76px;
}

/* 服务子项 */
.service-sub-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-left: 76px;
}
@media (max-width: 640px) {
    .service-block { padding: 28px 20px; }
    .service-block > p { margin-left: 0; }
    .service-sub-grid { margin-left: 0; grid-template-columns: 1fr; }
}
.service-sub-item {
    display: flex;
    gap: 14px;
    align-items: flex-start;
    padding: 16px;
    background: rgba(255,255,255,0.03);
    border-radius: 12px;
    border: 1px solid rgba(255,255,255,0.04);
    transition: all 0.3s;
}
.service-sub-item:hover {
    background: rgba(0,229,255,0.05);
    border-color: rgba(0,229,255,0.1);
}
.service-sub-item .ssi-icon { font-size: 1.4rem; flex-shrink: 0; margin-top: 2px; }
.service-sub-item h4 { font-size: 1rem; margin: 0 0 4px; }
.service-sub-item p { font-size: 0.85rem; color: rgba(255,255,255,0.5); margin: 0; line-height: 1.5; }

/* 流程展示 */
.process-flow {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 6px 0;
    margin: 30px 0 0 76px;
    padding: 20px;
    background: rgba(0,229,255,0.03);
    border-radius: 14px;
    border: 1px solid rgba(0,229,255,0.06);
}
@media (max-width: 640px) { .process-flow { margin-left: 0; } }
.process-node {
    text-align: center;
    padding: 12px 18px;
    flex: 1 1 120px;
}
.process-node .pn-icon { font-size: 1.4rem; }
.process-node .pn-label { font-size: 0.82rem; color: rgba(255,255,255,0.6); margin-top: 4px; }
.process-arrow { color: rgba(0,229,255,0.3); font-size: 1.1rem; padding: 0 4px; flex-shrink: 0; }
@media (max-width: 700px) {
    .process-flow { flex-direction: column; }
    .process-arrow { transform: rotate(90deg); }
}

/* CTA */
.cta-block {
    text-align: center;
    padding: 50px 20px;
    background: linear-gradient(180deg, transparent 0%, rgba(0,229,255,0.03) 100%);
    border-top: 1px solid rgba(255,255,255,0.05);
    margin-top: 20px;
}
.cta-block h2 { margin: 0 0 12px; }
.cta-block p { color: rgba(255,255,255,0.55); margin: 0 0 24px; font-size: 1rem; }
.btn-cta {
    display: inline-block;
    padding: 12px 30px;
    background: linear-gradient(135deg, #00e5ff, #7c4dff);
    border-radius: 8px;
    color: #fff;
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 600;
    transition: all 0.3s;
    margin: 0 6px;
}
.btn-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,229,255,0.2);
}
.btn-outline {
    display: inline-block;
    padding: 12px 30px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 8px;
    color: #fff;
    text-decoration: none;
    font-size: 0.95rem;
    transition: all 0.3s;
    margin: 0 6px;
}
.btn-outline:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.2); }
@media (max-width: 480px) {
    .btn-cta, .btn-outline { display: block; margin: 8px auto; max-width: 260px; }
}
</style>

<!-- ==================== 页面横幅 ==================== -->
<div class="page-banner">
    <div class="page-banner-content">
        <h1>核心 <span class="highlight">服务</span></h1>
        <p>四大核心业务板块，覆盖智慧停车到安防监控的全链路解决方案</p>
    </div>
</div>

<!-- ==================== 服务内容 ==================== -->
<div class="services-page">
<div class="container">

<!-- 1. 智慧停车场建设 -->
<div class="service-block">
    <div class="service-block-header">
        <div class="service-block-icon">🅿️</div>
        <h2><span class="highlight">智慧停车场</span> 建设</h2>
    </div>
    <p>从车牌识别到无感支付，从车位引导到云端管理，提供停车场全流程智能化解决方案。覆盖住宅小区、商业综合体、医院、写字楼等各类场景。</p>

    <div class="service-sub-grid">
        <div class="service-sub-item">
            <div class="ssi-icon">🔍</div>
            <div>
                <h4>AI车牌识别</h4>
                <p>深度学习算法，识别率≥99.5%，支持蓝牌/绿牌/黄牌/军警牌，夜间红外补光全天候运行</p>
            </div>
        </div>
        <div class="service-sub-item">
            <div class="ssi-icon">🅿️</div>
            <div>
                <h4>车位引导系统</h4>
                <p>超声波/地磁检测实时采集车位状态，LED引导屏+指示灯层层指引，支持反向寻车</p>
            </div>
        </div>
        <div class="service-sub-item">
            <div class="ssi-icon">💳</div>
            <div>
                <h4>无感支付</h4>
                <p>微信/支付宝扫码、ETC扣款、月卡续费、无感绑定，出场自动抬杆，通行≤2秒</p>
            </div>
        </div>
        <div class="service-sub-item">
            <div class="ssi-icon">☁️</div>
            <div>
                <h4>云端管理平台</h4>
                <p>B/S架构实时查看车位占用、车流量统计、收费报表，支持多车场统一管理和远程开闸</p>
            </div>
        </div>
        <div class="service-sub-item">
            <div class="ssi-icon">📱</div>
            <div>
                <h4>车主小程序</h4>
                <p>微信小程序查余位、提前缴费、月卡购买、电子发票、停车记录查询，提升车主体验</p>
            </div>
        </div>
        <div class="service-sub-item">
            <div class="ssi-icon">🔐</div>
            <div>
                <h4>安全管控</h4>
                <p>黑名单布控、一车一杆防跟车、防逆行检测、设备离线告警，数据加密全程追溯</p>
            </div>
        </div>
    </div>

    <div class="process-flow">
        <div class="process-node">
            <div class="pn-icon">📷</div>
            <div class="pn-label">车牌识别相机</div>
        </div>
        <div class="process-arrow">→</div>
        <div class="process-node">
            <div class="pn-icon">🖥️</div>
            <div class="pn-label">现场控制终端</div>
        </div>
        <div class="process-arrow">→</div>
        <div class="process-node">
            <div class="pn-icon">☁️</div>
            <div class="pn-label">云端管理平台</div>
        </div>
        <div class="process-arrow">→</div>
        <div class="process-node">
            <div class="pn-icon">📱</div>
            <div class="pn-label">车主小程序</div>
        </div>
    </div>
</div>

<!-- 2. 安防监控系统 -->
<div class="service-block">
    <div class="service-block-header">
        <div class="service-block-icon">📹</div>
        <h2><span class="highlight">安防监控</span> 系统</h2>
    </div>
    <p>高清数字监控、AI智能分析、夜视全彩、远程实时查看。提供监控系统设计、安装、调试、维护一站式服务，全方位守护安全。</p>

    <div class="service-sub-grid">
        <div class="service-sub-item">
            <div class="ssi-icon">📹</div>
            <div>
                <h4>数字高清监控</h4>
                <p>200万-800万像素高清摄像头，H.265+智能编码，PoE供电，一网线解决传输与供电</p>
            </div>
        </div>
        <div class="service-sub-item">
            <div class="ssi-icon">🤖</div>
            <div>
                <h4>AI智能监控</h4>
                <p>内置AI芯片：人形检测、车辆识别、区域入侵、越界告警、物品遗留/移除检测</p>
            </div>
        </div>
        <div class="service-sub-item">
            <div class="ssi-icon">☁️</div>
            <div>
                <h4>远程云监控</h4>
                <p>手机APP远程实时查看，多画面分割、视频回放、云存储+本地双备份</p>
            </div>
        </div>
        <div class="service-sub-item">
            <div class="ssi-icon">🔥</div>
            <div>
                <h4>烟火检测</h4>
                <p>视频实时检测烟雾和火焰，第一时间火灾预警，适用于仓库、工厂、加油站等重点区域</p>
            </div>
        </div>
        <div class="service-sub-item">
            <div class="ssi-icon">🚨</div>
            <div>
                <h4>异常行为分析</h4>
                <p>奔跑、摔倒、聚集、打架斗殴检测，适用于学校、监狱、医院等公共安全场景</p>
            </div>
        </div>
        <div class="service-sub-item">
            <div class="ssi-icon">📊</div>
            <div>
                <h4>客流统计</h4>
                <p>实时进出人数统计、区域热度分布、停留时长分析，辅助运营决策</p>
            </div>
        </div>
    </div>
</div>

<!-- 3. 信息系统集成 -->
<div class="service-block">
    <div class="service-block-header">
        <div class="service-block-icon">🔌</div>
        <h2><span class="highlight">信息系统</span> 集成</h2>
    </div>
    <p>智能控制系统集成、多系统协同、统一平台管理。计算机软硬件销售、网络设备部署、信息系统运行维护，专业7×24技术保障。</p>

    <div class="service-sub-grid">
        <div class="service-sub-item">
            <div class="ssi-icon">🔄</div>
            <div>
                <h4>多系统集成</h4>
                <p>门禁、考勤、停车、监控、消防等多系统统一平台管理，打破信息孤岛</p>
            </div>
        </div>
        <div class="service-sub-item">
            <div class="ssi-icon">💻</div>
            <div>
                <h4>软硬件销售</h4>
                <p>计算机、服务器、网络设备、安防设备销售与部署，品牌授权渠道正品保障</p>
            </div>
        </div>
        <div class="service-sub-item">
            <div class="ssi-icon">📡</div>
            <div>
                <h4>网络部署</h4>
                <p>企业局域网、无线覆盖、光纤接入设计与施工，确保网络高速稳定</p>
            </div>
        </div>
        <div class="service-sub-item">
            <div class="ssi-icon">🔧</div>
            <div>
                <h4>运维服务</h4>
                <p>7×24小时系统运行维护、故障排查、定期巡检，保障系统持续稳定运行</p>
            </div>
        </div>
    </div>
</div>

<!-- 4. 弱电与通讯工程 -->
<div class="service-block">
    <div class="service-block-header">
        <div class="service-block-icon">📡</div>
        <h2><span class="highlight">弱电与通讯</span> 工程</h2>
    </div>
    <p>通讯设备销售安装、综合布线、弱电智能化工程。从设计到施工一站式服务，打造智能、高效、可靠的弱电系统。</p>

    <div class="service-sub-grid">
        <div class="service-sub-item">
            <div class="ssi-icon">📶</div>
            <div>
                <h4>综合布线</h4>
                <p>六类/超六类网线、光纤布线，规范施工，标签化管理，提供完整竣工图纸</p>
            </div>
        </div>
        <div class="service-sub-item">
            <div class="ssi-icon">🚪</div>
            <div>
                <h4>门禁系统</h4>
                <p>指纹/刷卡/人脸识别门禁，支持联动考勤、消防报警，分级权限管理</p>
            </div>
        </div>
        <div class="service-sub-item">
            <div class="ssi-icon">🏢</div>
            <div>
                <h4>楼宇对讲</h4>
                <p>数字楼宇对讲系统，可视对讲、远程开锁、访客留影，提升社区安全</p>
            </div>
        </div>
        <div class="service-sub-item">
            <div class="ssi-icon">🔊</div>
            <div>
                <h4>公共广播</h4>
                <p>背景音乐、紧急广播、分区播控系统，适用于商场、学校、园区等场所</p>
            </div>
        </div>
    </div>
</div>

</div>
</div>

<!-- ==================== CTA ==================== -->
<div class="cta-block">
    <h2>需要 <span class="highlight">定制方案</span>？</h2>
    <p>免费上门勘测，为您量身打造智能化解决方案</p>
    <div>
        <a href="/contact/" class="btn-outline">📞 联系我们</a>
        <a href="tel:16689025173" class="btn-cta">📞 166-8902-5173</a>
    </div>
</div>
