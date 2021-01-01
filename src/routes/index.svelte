<script>
  import { preferences } from './store'
  import { onMount } from "svelte";

  onMount(() => {
    if ($preferences.theme === 'dark') {
      document.querySelector('html').classList.add('dark')
    }
  })
  $: {
    if (typeof document != 'undefined') {
      if ($preferences.theme === 'dark') {
        document.querySelector('html').classList.add('dark')
      } else {
        document.querySelector('html').classList.remove('dark')
      }
    }
  }
</script>

<div>
  <article>
    <h2 class="text-3l font-bold mb-2">Profile</h2>
    <p>I am ulwlu, an engineer in Tokyo.</p>

    <h2 class="text-3l font-bold mb-2">SNS</h2>
    <p><a href="https://github.com/ulwlu" target="_blank">Github</a>(<a href="https://github.com/pulls?q=is%3Apr+author%3Aulwlu+archived%3Afalse+sort%3Aupdated-desc+-user%3Aulwlu">PRs</a>) / <a href="https://gist.github.com/ulwlu" target="_blank">Gist</a> / <a href="https://www.linkedin.com/in/kohei-murakami-ulwlu" target="_blank">LinkedIn</a></p>
    <p><a href="https://qiita.com/ulwlu" target="_blank">Qiita</a> / <a href="https://zenn.dev/ulwlu">Zenn</a> / <a href="https://www.instagram.com/ooulwluoo" target="_blank">Instagram</a> / <a href="https://www.reddit.com/user/ryuta69">Reddit</a></p>
    <p>Mail: <a href="mailto:ooulwluoo@gmail.com">ooulwluoo@gmail.com</a></p>

    <h2 class="text-3l font-bold mb-2">Thanks</h2>
    <p>This blog is made by Svelte-kit, Tailwind-css, Typescript, and Snowpack.</p>
    <p>Previously made by Svelte, Sapper, Contentful, and Netlify.</p>

    <h2 class="text-3l font-bold mb-2">Currently you are in {$preferences.theme} theme</h2>
    <button on:click={()=> $preferences.theme = $preferences.theme === 'dark' ? 'light' : 'dark' }>
      Toggle Theme
    </button>
  </article>
</div>

<style lang="postcss">
  div {
    @apply text-left;
  }
  h2 {
    @apply underline;
  }
  p {
    @apply mt-0 mb-2;
  }
  a {
    @apply text-indigo-600 hover:underline;
  }
</style>
