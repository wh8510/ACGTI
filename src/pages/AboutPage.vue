<template>
  <div class="page-stack compact">
    <section class="hero-panel">
      <p class="eyebrow">关于 ACGTI</p>
      <h1 style="font-weight: 800; line-height: 1.2;">以 MBTI 为骨架，用二次元角色代码给你一个好玩的人格标签。</h1>
      <p class="lead">
        ACGTI（ACG Type Indicator）是一个以 MBTI 为基础的二次元角色原型测试站点。通过回答情境式问题，获得唯一命中的角色代码、维度倾向比例，以及对应的二次元角色原型解析。当前版本为纯静态前端，部署在 Cloudflare Pages 上。
      </p>
      <p class="lead">
        项目完全开源，代码仓库：<a href="https://github.com/tianxingleo/ACGTI" target="_blank" rel="noopener" style="color: var(--accent); font-weight: 600;">GitHub - tianxingleo/ACGTI</a>。欢迎 Star、欢迎 Fork、欢迎 PR！当前项目仍处于早期阶段，题目数量和角色库都还不够丰富，如果你有好的情境题目想法或想补充更多作品的角色，非常期待你的参与。
      </p>
      <div style="margin-top: 2rem;">
        <a href="https://github.com/tianxingleo/ACGTI" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 8px; background: #3ba17c; color: white; padding: 12px 24px; border-radius: 30px; font-weight: 600; text-decoration: none; transition: transform 0.2s;">
          <svg style="width: 20px; height: 20px;" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          去 GitHub 点亮 Star ⭐
        </a>
      </div>
    </section>

    <section class="split-grid">
      <article class="panel">
        <h2 class="section-title">当前边界</h2>
        <div class="meta-list">
          <div class="meta-item">
            <span class="label">娱乐定位</span>
            <p class="value">它是角色原型测试，不是专业心理评估，也不用于现实人格定型。</p>
          </div>
          <div class="meta-item">
            <span class="label">技术边界</span>
            <p class="value">暂不引入账号、数据库、排行榜或后台，优先保证体验、内容和维护成本。</p>
          </div>
          <div class="meta-item">
            <span class="label">后续扩展</span>
            <p class="value">后面可以继续扩题库、扩角色库、加隐藏结果、做分享海报或多主题模式。</p>
          </div>
        </div>
      </article>

      <article class="panel">
        <h2 class="section-title">这版实现了什么</h2>
        <div class="timeline-list">
          <div class="timeline-item">
            <span class="label">内容层</span>
            <p class="value">37 道题、8 个原型、22 位已录入角色。</p>
          </div>
          <div class="timeline-item">
            <span class="label">规则层</span>
            <p class="value">先计算 MBTI 四维得分，再做原型映射和唯一角色命中。</p>
          </div>
          <div class="timeline-item">
            <span class="label">表现层</span>
            <p class="value">首页、说明页、测试页、结果页、关于页的完整闭环。</p>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>
