<script lang="ts">
	import { getImageUrl } from '$lib/data/api/database-chess';
	import { cartState } from '$lib/state/cart_state.svelte';
	import { createWhatsappLink } from '$lib/utils/utils';
	import { Trash } from '@lucide/svelte';
</script>

<div class="mx-auto mt-10 max-w-5xl px-5 md:px-10">
	<div class="w-full rounded-md border border-gray-200 bg-white p-5 shadow-md">
		<div class="mb-7 text-2xl font-semibold">Cart</div>
		<div class="grid grid-cols-1 gap-3">
			{#each cartState.items as { id, title, banner, duration }, i (i)}
				<div class="flex justify-between">
					<div class="flex gap-3">
						<img src={getImageUrl(banner)} alt={banner} class="max-w-32 rounded-md" />
						<div class="flex flex-col">
							<div class="font-medium">
								{title}
							</div>
							<div>{duration}</div>
						</div>
					</div>

					<button
						onclick={() => {
							cartState.removeItem(id);
						}}
						class="flex h-full cursor-pointer items-center justify-center"><Trash /></button
					>
				</div>
			{/each}
			<button
				onclick={() => {
					window.open(createWhatsappLink(cartState.items), '_blank', 'noopener,noreferrer');
				}}
				class="mx-auto mt-5 w-full cursor-pointer rounded-md bg-blue-600 p-2 text-white">Buy</button
			>
		</div>
	</div>
</div>
