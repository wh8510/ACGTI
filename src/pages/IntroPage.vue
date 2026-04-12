<script setup lang="ts">
import { useI18n } from '../i18n'

const { t, tm } = useI18n()
</script>

<template>
  <div class="page-stack compact">
    <section class="hero-panel center">
      <p class="eyebrow">{{ t('intro.eyebrow') }}</p>
      <h1 class="display-title">{{ t('intro.title') }}</h1>
      <p class="lead">{{ t('intro.lead') }}</p>
      <div class="cta-row" style="justify-content: center;">
        <RouterLink class="button button-primary" to="/quiz">{{ t('intro.start') }}</RouterLink>
      </div>
    </section>

    <section class="split-grid" v-reveal>
      <article class="panel">
        <h2 class="section-title">{{ t('intro.resultTitle') }}</h2>
        <div class="meta-list">
          <div v-for="item in tm<string[][]>('intro.resultItems')" :key="item[0]" class="meta-item">
            <span class="label">{{ item[0] }}</span>
            <p class="value">{{ item[1] }}</p>
          </div>
        </div>
      </article>

      <article class="panel">
        <h2 class="section-title">{{ t('intro.dimensionTitle') }}</h2>
        <div class="pill-row">
          <span v-for="dimension in tm<string[]>('intro.dimensions')" :key="dimension" class="pill">{{ dimension }}</span>
        </div>
      </article>
    </section>
  </div>
</template>
