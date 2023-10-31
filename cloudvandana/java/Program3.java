import java.util.Scanner;

public class Program3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String sentence = scanner.nextLine().toLowerCase();
        boolean isPangram = checkIfPangram(sentence);
        if (isPangram) {
            System.out.println("The sentence is a pangram.");
        } else {
            System.out.println("The sentence is not a pangram.");
        }
    }

    public static boolean checkIfPangram(String sentence) {
        boolean[] mark = new boolean[26];
        int index;
        for (int i = 0; i < sentence.length(); i++) {
            if ('a' <= sentence.charAt(i) && sentence.charAt(i) <= 'z') {
                index = sentence.charAt(i) - 'a';
                mark[index] = true;
            }
        }
        for (int i = 0; i <= 25; i++) {
            if (!mark[i]) {
                return false;
            }
        }
        return true;
    }
}
