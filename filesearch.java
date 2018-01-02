import java.io.*;
import java.util.*;
public class FileSarch {
	public void printDirectory(String fname)throws IOException{
		File f = new File(fname);
		if(f.exists()){
			System.out.println("절대경로: "+f.getAbsolutePath()); //
			System.out.println("(대문자) 경로:"+f.getCnonicaPath());getCnonicaPath // throws
			System.out.println("수정날짜: "+new Date(f.lastModified()));
			System.out.println("Read 가능 ? "+f.canRead());
			System.out.println("Write가능 ? "+f.canWrite());
			if(f.isDirectory()) {
				System.out.println("디렉토리인가? "+f.isDirectory());
				File[]
			}
		}
	}
}