import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://magzzuxbxaqlkwrfyrxv.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hZ3p6dXhieGFxbGt3cmZ5cnh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyMTIyNzQsImV4cCI6MTk4Mzc4ODI3NH0.25PipSXN87qgwWxD8yJq7n8GZITG-z69PaQyuDGTL_U";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");             
        }
    }
}