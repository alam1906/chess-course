import { supabase } from '$lib/supabaseClient';

export async function getData() {
	const { data, error } = await supabase.from('database-chess').select();
	if (error) {
		console.error(error.message);
	}
	return data;
}

export function getImageUrl(name: string): string {
	const { data } = supabase.storage.from('images-chess').getPublicUrl(`${name}.webp`);
	return data.publicUrl;
}
