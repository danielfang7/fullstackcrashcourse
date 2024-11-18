import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qpdbdndwfqnvyjqythqi.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwZGJkbmR3ZnFudnlqcXl0aHFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk0ODQxMjgsImV4cCI6MjA0NTA2MDEyOH0.-hJ_dtN23SQaASvn9dAXKdQHzcFd2pR3pPPpP0CNGyc`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
