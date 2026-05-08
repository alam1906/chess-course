<script lang="ts">
	import { goto } from '$app/navigation';
	import Cart from '@lucide/svelte/icons/shopping-cart';
	import Info from '@lucide/svelte/icons/info';
	import { fade } from 'svelte/transition';
	import { buys, keterangan } from '$lib/data/local/buy';

	let visible = $state(false);
	function closeDialog() {
		visible = false;
	}
</script>

<div class="sticky top-0 z-50 bg-white shadow-md">
	<div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-10">
		<div class="font-serif text-2xl font-semibold">CHESSMATE</div>
		<div class="flex items-center justify-start gap-5 md:gap-7">
			<button
				onclick={() => {
					visible = true;
				}}
				class="cursor-pointer"><Info /></button
			>
			<button
				onclick={() => {
					// eslint-disable-next-line svelte/no-navigation-without-resolve
					goto('/cart');
				}}
				class="cursor-pointer"><Cart /></button
			>
		</div>
	</div>
</div>

{#if visible}
	<!-- Overlay -->
	<button
		transition:fade={{ duration: 200 }}
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-5 backdrop-blur-sm"
		onclick={closeDialog}
	>
		<!-- Dialog -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			class="flex w-[85vw] flex-1 flex-col items-start gap-y-4 overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl md:w-[50vw]"
			onclick={(e) => e.stopPropagation()}
		>
			<div class="m-auto flex flex-col min-[500px]:max-w-3xl">
				<div class="mb-3 flex w-full flex-col">
					<div class="mb-1 text-center font-medium">Cara Membeli</div>
					<ul class="mx-4 list-decimal text-start">
						{#each buys as item, i (i)}
							<li class="">{item.description}</li>
						{/each}
					</ul>
				</div>

				<div class="flex w-full flex-col">
					<div class="mb-1 text-center font-medium">Jika course tidak ada</div>
					<ul class="mx-4 list-decimal text-start">
						{#each keterangan as item, i (i)}
							<li class="">{item.description}</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</button>
{/if}
