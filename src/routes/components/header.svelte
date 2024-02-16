<script lang="ts">
    import * as config from '$lib/config'
</script>

<nav>
    <a href="/" class="title">
        <b>{config.title}</b>
    </a>

    <ul class="links">
        <li>
            <a href="/about">About</a>
        </li>

        <li>
            <a href="https://docs.facepunch.com/s/sbox-dev/doc/sbox-documentation-iWNhAIdqPB">Docs</a>
        </li>
        <li>
            <a href="https://wiki.facepunch.com/sbox/">Wiki</a>
        </li>
        <li>
            <a href="https://github.com/B0zy/sutorial">Contribute</a>
        </li>
    </ul>

    <a href="https://discord.gg/sbox">
        <button>Discord</button>
    </a>
</nav>

<style>
    nav {
		padding-block: var(--size-7);
	}

	.links {
		margin-block: var(--size-7);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	@media (min-width: 768px) {
		nav {
			display: flex;
			justify-content: space-between;
		}

		.links {
			display: flex;
			gap: var(--size-7);
			margin-block: 0;
		}
	}
</style>