<script lang="ts">
	import { getData, getImageUrl } from '$lib/data/api/database-chess';
	import { cartState } from '$lib/state/cart_state.svelte';
	import type { ChessCourse } from '$lib/types/types';
	import { cleanTitle } from '$lib/utils/utils';
	import Toast from '$lib/components/Toast.svelte';

	let visible = $state(false);

	function showToast() {
		visible = true;

		setTimeout(() => {
			visible = false;
		}, 1000);
	}

	const data_course = $state<ChessCourse[] | null>(await getData());
	let searchParams = $state('');
	let filterCourse = $derived.by(() => {
		if (data_course === null) {
			return null;
		}
		if (searchParams === '') {
			return data_course;
		} else {
			return data_course.filter((e) => {
				return e.title.toLowerCase().includes(searchParams.toLowerCase());
			});
		}
	});

	$inspect(cartState.items);
</script>

<div class="my-10">
	{@render search()}
	{@render list_course()}
	<Toast {visible} />
</div>

{#snippet search()}
	<div class="mx-auto max-w-5xl px-5 md:px-10">
		<input
			type="text"
			class="mb-10 w-full rounded-xl border-white p-3 shadow-md"
			placeholder="Search"
			bind:value={searchParams}
		/>
	</div>
{/snippet}

{#snippet list_course()}
	<div class="mx-auto max-w-7xl px-5 md:px-10">
		<div class="mb-2 text-gray-600">
			Result : {filterCourse?.length}
		</div>
		<div class="grid grid-cols-1 gap-5 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{#each filterCourse as items, i (i)}
				{@const newTitle = cleanTitle(items.title)}
				<div class="rounded-xl bg-white shadow-sm">
					<div class="relative h-44 w-full rounded-t-xl bg-gray-300">
						<img
							class="h-full w-full rounded-t-xl bg-cover brightness-75"
							src={getImageUrl(items.banner)}
							alt={getImageUrl(items.banner)}
							fetchpriority="high"
							loading="lazy"
							referrerpolicy="no-referrer"
						/>
						<div class="absolute right-1 bottom-1 text-sm text-white">{items.duration}</div>
					</div>
					<div class="px-2 py-2">
						<div class="flex gap-2">
							<div class="tracking-tighter text-gray-600 line-through">Rp 100.000</div>
							<div class="font-medium tracking-tighter text-blue-700">Rp 20.000</div>
						</div>

						<div class=" line-clamp-2 font-medium">
							{newTitle}
						</div>

						<div class="mt-2 flex gap-2 text-center">
							<button
								onclick={() => {
									const item: ChessCourse = {
										id: items.id,
										banner: items.banner,
										title: items.title,
										duration: items.duration
									};

									cartState.addItem(item);
									showToast();
								}}
								class="w-fit cursor-pointer rounded-md bg-blue-600 px-3 py-2 text-white"
							>
								Add to Cart
							</button>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
{/snippet}
