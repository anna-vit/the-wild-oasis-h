import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://mhcwkgkwcswhnaahjapv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oY3drZ2t3Y3N3aG5hYWhqYXB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk1NjQ4NDUsImV4cCI6MjAyNTE0MDg0NX0.wi9h0OTSYd2j6v-lQFNNb8fqTVqAj-OQefb3enWvJ44";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
