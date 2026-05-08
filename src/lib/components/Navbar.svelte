<script lang="ts">
	import { goto } from '$app/navigation';
	import Cart from '@lucide/svelte/icons/shopping-cart';
</script>

<div class="sticky top-0 z-50 bg-white shadow-md">
	<div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-10">
		<div class="font-serif text-2xl font-semibold">CHESSMATE</div>
		<button
			onclick={() => {
				// eslint-disable-next-line svelte/no-navigation-without-resolve
				goto('/cart');
			}}
			class="cursor-pointer"><Cart /></button
		>
	</div>
</div>
