import { supabase } from '../lib/supabase';

export const postRepository = async (content, userId) => {
  const { data, error } = await supabase
    .from('posts')
    .insert({ content: content, user_id: userId })
    .select();

  if (error != null) throw new Error();

  return data[0];
};
